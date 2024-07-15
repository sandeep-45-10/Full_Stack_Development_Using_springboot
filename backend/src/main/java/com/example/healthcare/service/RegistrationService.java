package com.example.healthcare.service;

import com.example.healthcare.model.Registration;
import com.example.healthcare.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration createRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    public Registration getRegistrationById(String id) {
        return registrationRepository.findById(id).orElse(null);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public void deleteRegistration(String id) {
        registrationRepository.deleteById(id);
    }

    public Registration login(String email, String password) {
        Registration registration = registrationRepository.findByEmail(email);
        if (registration != null && registration.getPassword().equals(password)) {
            return registration;
        }
        return null;
    }
}
