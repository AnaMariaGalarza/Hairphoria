package Grupo8.Hairphoria.service.Interfaces;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IAWSService {

    String uploadFile(MultipartFile file);

    List<String> uploadMultipleFiles(List<MultipartFile> files);

    void deleteFile(List<String> urlList);
}
