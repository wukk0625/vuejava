package com.springboot.demo.controller;

import com.springboot.demo.bean.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/json")
public class HelloController {

    @RequestMapping("/user")
    public User getUser() {
        return new User(1, "倪升武", "123456");
    }

    @RequestMapping("/list")
    public List<User> getUserList(@RequestBody User user) {
        List<User> userList = new ArrayList<>();
        User user1 = new User(1, "倪升武", "123456");
        User user2 = new User(2, "达人课", "123456");
        User user3 = new User(3, "wukka", "1278978998886233");
        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user);
        return userList;
    }
}

