package com.ex.mod1.Service;

import java.util.List;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ex.mod1.Entity.OrganizerForm;
import com.ex.mod1.Repository.OrganizerFormRepo;


@Service
public class OrganizerFormService {
	
	@Autowired
	private OrganizerFormRepo repo;
	
	
	public List<String> getEvent() {
        return repo.getEvent();
    }
	
	
	public boolean addDetails(OrganizerForm obj){
		repo.save(obj);
		return true;
	}


	public List<OrganizerForm> getEventAll() {
		return repo.findAll();
	}
	
}