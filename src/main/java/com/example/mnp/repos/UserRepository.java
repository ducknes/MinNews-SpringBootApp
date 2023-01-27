package com.example.mnp.repos;

import com.example.mnp.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByLogin(String login);

    Optional<User> findById(Long id);
    List<User> findAllByLogin(String login);
    void deleteByLogin(String login);
}
