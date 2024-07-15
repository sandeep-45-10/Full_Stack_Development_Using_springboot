package com.example.healthcare.repository;

import com.example.healthcare.model.HealthInsurance;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HealthInsuranceRepository extends MongoRepository<HealthInsurance, String> {
}
