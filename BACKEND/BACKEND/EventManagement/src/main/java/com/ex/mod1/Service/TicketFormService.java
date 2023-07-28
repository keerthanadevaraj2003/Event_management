package com.ex.mod1.Service;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.mod1.Entity.OrganizerForm;
import com.ex.mod1.Entity.TicketForm;
import com.ex.mod1.Repository.TicketFormRepo;


@Service
public class TicketFormService {
	
	@Autowired
	private TicketFormRepo repo;
	
	
	
	
	
	public boolean addDetails(TicketForm obj){
		repo.save(obj);
		return true;
	}


	public List<TicketForm> getTicketAll() {
		return repo.findAll();
	}
	
}