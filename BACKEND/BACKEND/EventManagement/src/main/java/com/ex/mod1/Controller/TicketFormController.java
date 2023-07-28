package com.ex.mod1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ex.mod1.Service.TicketFormService;
import com.ex.mod1.Entity.OrganizerForm;
import com.ex.mod1.Entity.TicketForm;



@RestController
@CrossOrigin("http://localhost:3000")
public class TicketFormController {
	
	@Autowired
	private TicketFormService serv;
	
	@PostMapping("/postticket")
	public boolean addDetails(@RequestBody TicketForm obj){
		return serv.addDetails(obj);
	}	
	 @GetMapping("/getAllTick")
	 public List<TicketForm> getTicketAll(){
		 return serv.getTicketAll();
	 }
	
}

