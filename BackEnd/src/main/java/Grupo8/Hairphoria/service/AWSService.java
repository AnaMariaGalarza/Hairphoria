package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.service.Interfaces.IAWSService;
import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3URI;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AWSService implements IAWSService {

    private final AmazonS3 amazonS3;
    @Value("${aws.s3.bucket}")
    private String bucketName;

    @Override
    public String uploadFile(MultipartFile file) {
        String fileUrl = null;
        try {
            String newFileName = System.currentTimeMillis() + file.getOriginalFilename();
            PutObjectRequest request = new PutObjectRequest(bucketName, newFileName, file.getInputStream(), new ObjectMetadata());
            amazonS3.putObject(request);
            GeneratePresignedUrlRequest urlRequest = new GeneratePresignedUrlRequest(bucketName, newFileName)
                    .withMethod(HttpMethod.GET);
            URL url = amazonS3.generatePresignedUrl(urlRequest);
            fileUrl = "http://" + url.getHost() + url.getPath();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return fileUrl;
    }

    @Override
    public List<String> uploadMultipleFiles(List<MultipartFile> files) {
        List<String> filesUrl = new ArrayList<>();
        for (MultipartFile file : files) {
            try {
                String newFileName = System.currentTimeMillis() + file.getOriginalFilename();
                PutObjectRequest request = new PutObjectRequest(bucketName, newFileName, file.getInputStream(), new ObjectMetadata());
                amazonS3.putObject(request);
                GeneratePresignedUrlRequest urlRequest = new GeneratePresignedUrlRequest(bucketName, newFileName)
                        .withMethod(HttpMethod.GET);
                URL url = amazonS3.generatePresignedUrl(urlRequest);
                String fileUrl = "http://" + url.getHost() + url.getPath();
                filesUrl.add(fileUrl);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return filesUrl;
    }


    @Override
    public void deleteFile(List<String> urlList) {
        for (String url : urlList) {
            try {
                String decodedUrl = URLDecoder.decode(url, StandardCharsets.UTF_8);
                AmazonS3URI s3URI = new AmazonS3URI(decodedUrl);
                String objectKey = s3URI.getKey();
                amazonS3.deleteObject(bucketName, objectKey);
            } catch (Exception e) {
                e.getMessage();
            }
        }
    }


}


