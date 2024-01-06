package com.example.Car_Rental.repository;

import com.example.Car_Rental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
