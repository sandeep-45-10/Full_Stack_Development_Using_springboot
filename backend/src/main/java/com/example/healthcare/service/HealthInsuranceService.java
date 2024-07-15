package com.example.healthcare.service;

import com.example.healthcare.model.HealthInsurance;
import com.example.healthcare.repository.HealthInsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthInsuranceService {

    @Autowired
    private HealthInsuranceRepository healthInsuranceRepository;

    public HealthInsurance createHealthInsurance(HealthInsurance healthInsurance) {
        return healthInsuranceRepository.save(healthInsurance);
    }

    public HealthInsurance getHealthInsuranceById(String id) {
        return healthInsuranceRepository.findById(id).orElse(null);
    }

    public List<HealthInsurance> getAllHealthInsurances() {
        return healthInsuranceRepository.findAll();
    }

    public void deleteHealthInsurance(String id) {
        healthInsuranceRepository.deleteById(id);
    }
}
