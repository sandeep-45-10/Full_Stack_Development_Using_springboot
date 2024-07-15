package com.example.healthcare.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "telemedicines")
@Data
public class Telemedicine {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String problemDescription;
    private String date;
    private String time;
}
