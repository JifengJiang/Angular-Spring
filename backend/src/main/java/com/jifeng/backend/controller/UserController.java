package com.jifeng.backend.controller;

import com.jifeng.backend.model.User;
import com.jifeng.backend.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> json) throws ServletException {
        if(json.get("username") == null || json.get("password") == null) {
            throw new ServletException("Please fill in username and password");
        }
        String userName = json.get("username");
        String password = json.get("password");

        User user = userService.findByUserName(userName);
        if(user == null) {
            throw new ServletException("User name not found");
        }

        String pwd = user.getPassword();
        if(!password.equals(pwd)) {
            throw new ServletException("Invalid Login. Please check your name and password");
        }
        return Jwts.builder().setSubject(userName).claim("roles", "user").setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secretKey").compact();
    }

}
