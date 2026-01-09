package com.flipr.backend.controller;

import com.flipr.backend.model.Client;
import com.flipr.backend.model.ContactForm;
import com.flipr.backend.model.Project;
import com.flipr.backend.model.Subscriber;
import com.flipr.backend.service.ClientService;
import com.flipr.backend.service.ContactFormService;
import com.flipr.backend.service.ImageService;
import com.flipr.backend.service.ProjectService;
import com.flipr.backend.service.SubscriberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ProjectService projectService;
    private final ClientService clientService;
    private final ContactFormService contactFormService;
    private final SubscriberService subscriberService;
    private final ImageService imageService;

    @PostMapping("/projects")
    public Project addProject(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile image) throws IOException {

        String imageUrl = imageService.saveImage(image);

        Project project = new Project();
        project.setName(name);
        project.setDescription(description);
        project.setImageUrl(imageUrl);

        return projectService.saveProject(project);
    }

    @PostMapping("/clients")
    public Client addClient(
            @RequestParam("name") String name,
            @RequestParam("designation") String designation,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile image) throws IOException {

        String imageUrl = imageService.saveImage(image);

        Client client = new Client();
        client.setName(name);
        client.setDesignation(designation);
        client.setDescription(description);
        client.setImageUrl(imageUrl);

        return clientService.saveClient(client);
    }

    @GetMapping("/contacts")
    public List<ContactForm> getAllContacts() {
        return contactFormService.getAllSubmissions();
    }

    @GetMapping("/subscribers")
    public List<Subscriber> getAllSubscribers() {
        return subscriberService.getAllSubscribers();
    }
}
