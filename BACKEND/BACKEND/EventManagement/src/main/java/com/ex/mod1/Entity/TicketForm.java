package com.ex.mod1.Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TicketForm {
	@Id
	private int ticketid;
	private int max;
	private int general;
	private int premium;
	private int vip;
}
