package com.ex.mod1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.mod1.Entity.TicketForm;

public interface TicketFormRepo extends JpaRepository<TicketForm, Integer> {

	
}
