package com.ex.mod1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ex.mod1.Service.OrganizerFormService;
import com.ex.mod1.Entity.OrganizerForm;



@RestController
@CrossOrigin("http://localhost:3000")
public class OrganizerFormController {
	
	@Autowired
	private OrganizerFormService serv;
	
	@PostMapping("/add")
	public boolean addDetails(@RequestBody OrganizerForm obj){
		return serv.addDetails(obj);
		
	}	
	 @GetMapping("/get")
	 public List<String> getEvent(){
		 return serv.getEvent();
	 }
	 @GetMapping("/getAll")
	 public List<OrganizerForm> getEventAll(){
		 return serv.getEventAll();
	 }
}

