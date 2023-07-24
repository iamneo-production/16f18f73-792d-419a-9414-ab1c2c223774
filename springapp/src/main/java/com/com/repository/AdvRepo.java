package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Advisors;

public interface AdvRepo extends JpaRepository<Advisors, Integer>{

}
