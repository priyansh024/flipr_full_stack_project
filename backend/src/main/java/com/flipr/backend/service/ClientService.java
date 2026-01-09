package com.flipr.backend.service;

import com.flipr.backend.model.Client;
import com.flipr.backend.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepository repository;

    public List<Client> getAllClients() {
        return repository.findAll();
    }

    public Client saveClient(Client client) {
        return repository.save(client);
    }
}
