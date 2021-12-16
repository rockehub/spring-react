package com.example.aulaspring2.config;

import com.example.aulaspring2.entity.User;
import com.example.aulaspring2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    UserRepository userRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {

        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            createUser("Daniel", "daniel@daniel");
            createUser("Carlos", "carlos@carlos.com");
            createUser("jevanilson", "jevanilson@jev.com");
        }

    }

    public void createUser(String name, String email) {
        User user = new User(name, email);
        userRepository.save(user);
    }
}
