package com.flipr.backend.service;

import com.flipr.backend.model.Project;
import com.flipr.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository repository;

    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    public Project saveProject(Project project) {
        return repository.save(project);
    }
}
