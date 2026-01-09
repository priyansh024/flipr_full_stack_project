package com.flipr.backend.controller;

import com.flipr.backend.model.Client;
import com.flipr.backend.model.ContactForm;
import com.flipr.backend.model.Project;
import com.flipr.backend.model.Subscriber;
import com.flipr.backend.service.ClientService;
import com.flipr.backend.service.ContactFormService;
import com.flipr.backend.service.ProjectService;
import com.flipr.backend.service.SubscriberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicController {

    private final ProjectService projectService;
    private final ClientService clientService;
    private final ContactFormService contactFormService;
    private final SubscriberService subscriberService;

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/clients")
    public List<Client> getClients() {
        return clientService.getAllClients();
    }

    @PostMapping("/contact")
    public ContactForm submitContactForm(@RequestBody ContactForm form) {
        return contactFormService.submitForm(form);
    }

    @PostMapping("/subscribe")
    public Subscriber subscribe(@RequestBody Subscriber subscriber) {
        return subscriberService.subscribe(subscriber);
    }
}
