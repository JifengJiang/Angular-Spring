package com.jifeng.backend.controller;

import com.jifeng.backend.model.User;
import com.jifeng.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/rest/user")
public class UserResources {
    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public String loginSuccess() {
        return "login successful";
    }
    @PostMapping("/username")
    public User findByUserName(@RequestBody String userName){
        return userService.findByUserName(userName);
    }
}
