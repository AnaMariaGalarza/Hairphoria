package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.service.AWSService;
import Grupo8.Hairphoria.service.CategoriaService;
import Grupo8.Hairphoria.service.ServicioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/s3")
@RequiredArgsConstructor
public class AWSController {

    private final AWSService awsService;

    private final CategoriaService categoriaService;

    private final ServicioService servicioService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestPart(value = "file") MultipartFile file) {
        return ResponseEntity.ok(awsService.uploadFile(file));
    }

    @PostMapping("/Mupload")
    public ResponseEntity<List<String>> uploadMultiplesFiles(@RequestPart(value = "file") List<MultipartFile> files) {
        return ResponseEntity.ok(awsService.uploadMultipleFiles(files));
    }

    @DeleteMapping
    public ResponseEntity<String> deleteFile(@RequestBody List<String> files) {
        awsService.deleteFile(files);
        return ResponseEntity.ok("Se eliminó el archivo de la URL: ");
    }

}
