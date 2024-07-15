package com.example.healthcare.controller;

import com.example.healthcare.model.Telemedicine;
import com.example.healthcare.service.TelemedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/telemedicines")
public class TelemedicineController {

    @Autowired
    private TelemedicineService telemedicineService;

    @PostMapping
    public Telemedicine createTelemedicine(@RequestBody Telemedicine telemedicine) {
        return telemedicineService.createTelemedicine(telemedicine);
    }

    @GetMapping("/{id}")
    public Telemedicine getTelemedicineById(@PathVariable String id) {
        return telemedicineService.getTelemedicineById(id);
    }

    @GetMapping
    public List<Telemedicine> getAllTelemedicines() {
        return telemedicineService.getAllTelemedicines();
    }

    @DeleteMapping("/{id}")
    public void deleteTelemedicine(@PathVariable String id) {
        telemedicineService.deleteTelemedicine(id);
    }
}
