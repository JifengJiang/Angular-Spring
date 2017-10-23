package com.jifeng.backend.service;

import com.jifeng.backend.model.User;

public interface UserService {
    User save(User user);
    User findByUserName(String userName);
}
