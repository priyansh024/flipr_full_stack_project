package com.flipr.backend.service;

import com.flipr.backend.model.ContactForm;
import com.flipr.backend.repository.ContactFormRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactFormService {
    private final ContactFormRepository repository;

    public ContactForm submitForm(ContactForm form) {
        return repository.save(form);
    }

    public List<ContactForm> getAllSubmissions() {
        return repository.findAll();
    }
}
