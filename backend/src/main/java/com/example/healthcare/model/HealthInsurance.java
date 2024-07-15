package com.example.healthcare.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "healthinsurances")
@Data
public class HealthInsurance {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String nomineeName;
    private String nomineePhone;
    private String insuranceWorth;
}
