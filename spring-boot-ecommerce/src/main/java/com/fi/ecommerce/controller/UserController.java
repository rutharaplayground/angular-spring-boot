package com.fi.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fi.ecommerce.dao.UserRepository;
import com.fi.ecommerce.entity.User;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/user/")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping
	Page<User> findAll(Pageable pageable) {
		return userRepository.findAll(pageable);
	}
	
	@GetMapping(path="search/findByLoginIDContaining")
	Page<User> findByLoginIDContaining(@Param("loginID") String loginID, Pageable pageable) {
		return userRepository.findByLoginIDContaining(loginID, pageable);
	}
	
	@PostMapping
    public boolean saveUser(@RequestBody User user) {

		userRepository.save(user);
		
		return true;

    }
	
	@PostMapping(path="/delete")
    public boolean deleteUser(@RequestBody User user) {

		userRepository.delete(user);
		
		return true;

    }
	
	
}
