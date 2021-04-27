package com.fi.ecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.fi.ecommerce.entity.User;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {
	
	//Page<User> findAll(Pageable pageable);
	
    Page<User> findByLoginIDContaining(String loginID, Pageable pageable);
    
}
