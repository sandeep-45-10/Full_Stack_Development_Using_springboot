package com.example.healthcare.controller;

import com.example.healthcare.model.HealthInsurance;
import com.example.healthcare.service.HealthInsuranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/healthinsurances")
@CrossOrigin(origins = "http://localhost:3000")
public class HealthInsuranceController {

    @Autowired
    private HealthInsuranceService healthInsuranceService;

    @PostMapping
    public HealthInsurance createHealthInsurance(@RequestBody HealthInsurance healthInsurance) {
        return healthInsuranceService.createHealthInsurance(healthInsurance);
    }

    @GetMapping("/{id}")
    public HealthInsurance getHealthInsuranceById(@PathVariable String id) {
        return healthInsuranceService.getHealthInsuranceById(id);
    }

    @GetMapping
    public List<HealthInsurance> getAllHealthInsurances() {
        return healthInsuranceService.getAllHealthInsurances();
    }

    @DeleteMapping("/{id}")
    public void deleteHealthInsurance(@PathVariable String id) {
        healthInsuranceService.deleteHealthInsurance(id);
    }
}
