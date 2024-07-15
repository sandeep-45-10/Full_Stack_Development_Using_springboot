package com.example.healthcare.repository;

import com.example.healthcare.model.Registration;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RegistrationRepository extends MongoRepository<Registration, String> {
    Registration findByEmail(String email);
}
