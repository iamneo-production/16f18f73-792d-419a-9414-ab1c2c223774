package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Advisors;
import com.iamneo.security.entity.Userp;
import com.iamneo.security.repository.AdvRepo;
import com.iamneo.security.repository.UserpRepo;
import com.iamneo.security.service.UserpService;
@RestController
@CrossOrigin (origins="http://localhost:3000")
public class Totalcontroller {
@Autowired
UserpRepo prep;
@Autowired
UserpService pser;

@Autowired
AdvRepo arepo;


@GetMapping("/newhom")
    public List<Userp> getAllUsers() {
        return pser.getAllUsers();
    }

@GetMapping("/newh")
public List<Advisors> getAllAdv(){
	return arepo.findAll();
}
}

