package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.iamneo.security.entity.Userp;
import com.iamneo.security.repository.UserpRepo;

@Service
public class UserpService {
@Autowired
UserpRepo prepo;


public List<Userp> getDetails() {
    return prepo.findAll();
}

/*
public List<Userp> getDetails() {
    return prepo.findAll();
}
*/

public List<Userp> getAllUsers() {
    return prepo.findAll();
}
}
