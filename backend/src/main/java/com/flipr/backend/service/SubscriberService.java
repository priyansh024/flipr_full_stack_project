package com.flipr.backend.service;

import com.flipr.backend.model.Subscriber;
import com.flipr.backend.repository.SubscriberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriberService {
    private final SubscriberRepository repository;

    public Subscriber subscribe(Subscriber subscriber) {
        return repository.save(subscriber);
    }

    public List<Subscriber> getAllSubscribers() {
        return repository.findAll();
    }
}
