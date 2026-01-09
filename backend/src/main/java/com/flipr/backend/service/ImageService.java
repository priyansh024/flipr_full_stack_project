package com.flipr.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class ImageService {

    private final Path rootLocation = Paths.get("uploads");

    public ImageService() {
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage!", e);
        }
    }

    public String saveImage(MultipartFile file) throws IOException {
        // Bonus: Image Cropping
        // Example: 700x700 -> 450x350. Ratio approx 1.28
        // We will crop to 450:350 aspect ratio and then maybe resize or just save the
        // crop.
        // For simplicity, let's just resize to 450x350 if we want strict sizing, or
        // crop center.
        // The requirement says "crop... like 450x350".

        BufferedImage originalImage = ImageIO.read(file.getInputStream());
        if (originalImage == null) {
            throw new IOException("Invalid image file");
        }

        int targetWidth = 450;
        int targetHeight = 350;

        BufferedImage croppedImage = cropImage(originalImage, targetWidth, targetHeight);

        String filename = UUID.randomUUID().toString() + ".jpg";
        File outputFile = rootLocation.resolve(filename).toFile();
        ImageIO.write(croppedImage, "jpg", outputFile);

        return "/uploads/" + filename;
    }

    private BufferedImage cropImage(BufferedImage original, int targetWidth, int targetHeight) {
        // Simple resizing for now to specific dimensions as "cropping" logic can be
        // complex
        // But prompt says "crop". Let's do a center crop to aspect ratio then resize?
        // Let's just resize to 450x350 to enforce the dimensions as requested.
        // Actually, "crop" implies losing data.
        // Let's try to maintain aspect ratio and crop.

        int type = original.getType() == 0 ? BufferedImage.TYPE_INT_ARGB : original.getType();

        double ratio = (double) targetWidth / targetHeight;
        double originalRatio = (double) original.getWidth() / original.getHeight();

        int cropWidth = original.getWidth();
        int cropHeight = original.getHeight();

        if (originalRatio > ratio) {
            // Original is wider, crop width
            cropWidth = (int) (original.getHeight() * ratio);
        } else {
            // Original is taller, crop height
            cropHeight = (int) (original.getWidth() / ratio);
        }

        int x = (original.getWidth() - cropWidth) / 2;
        int y = (original.getHeight() - cropHeight) / 2;

        BufferedImage cropped = original.getSubimage(x, y, cropWidth, cropHeight);

        // Now resize to target dimensions
        BufferedImage resized = new BufferedImage(targetWidth, targetHeight, type);
        Graphics2D g = resized.createGraphics();
        g.drawImage(cropped, 0, 0, targetWidth, targetHeight, null);
        g.dispose();

        return resized;
    }

    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }
}
