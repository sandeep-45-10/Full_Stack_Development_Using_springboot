package com.example.healthcare.repository;

import com.example.healthcare.model.Telemedicine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TelemedicineRepository extends MongoRepository<Telemedicine, String> {
}
