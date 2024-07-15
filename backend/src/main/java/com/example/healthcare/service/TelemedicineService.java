package com.example.healthcare.service;

import com.example.healthcare.model.Telemedicine;
import com.example.healthcare.repository.TelemedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TelemedicineService {

    @Autowired
    private TelemedicineRepository telemedicineRepository;

    public Telemedicine createTelemedicine(Telemedicine telemedicine) {
        return telemedicineRepository.save(telemedicine);
    }

    public Telemedicine getTelemedicineById(String id) {
        return telemedicineRepository.findById(id).orElse(null);
    }

    public List<Telemedicine> getAllTelemedicines() {
        return telemedicineRepository.findAll();
    }

    public void deleteTelemedicine(String id) {
        telemedicineRepository.deleteById(id);
    }
}
