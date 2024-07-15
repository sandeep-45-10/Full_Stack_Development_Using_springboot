package com.example.healthcare.controller;

import com.example.healthcare.model.Appointment;
import com.example.healthcare.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable String id) {
        return appointmentService.getAppointmentById(id);
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable String id) {
        appointmentService.deleteAppointment(id);
    }
}
