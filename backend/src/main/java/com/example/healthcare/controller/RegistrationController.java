package com.example.healthcare.controller;

import com.example.healthcare.model.Registration;
import com.example.healthcare.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public Registration createRegistration(@RequestBody Registration registration) {
        return registrationService.createRegistration(registration);
    }

    @GetMapping("/{id}")
    public Registration getRegistrationById(@PathVariable String id) {
        return registrationService.getRegistrationById(id);
    }

    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationService.getAllRegistrations();
    }

    @DeleteMapping("/{id}")
    public void deleteRegistration(@PathVariable String id) {
        registrationService.deleteRegistration(id);
    }

    @PostMapping("/login")
    public Registration login(@RequestBody Registration registration) {
        return registrationService.login(registration.getEmail(), registration.getPassword());
    }
}
