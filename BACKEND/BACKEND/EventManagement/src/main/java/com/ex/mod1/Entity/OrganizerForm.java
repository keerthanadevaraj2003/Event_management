package com.ex.mod1.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrganizerForm {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int event_id;
	private String first_name;
	private String last_name;
	private String event_name;
	private String event_start_date;
	private String event_end_date;
	private String venue;
	private String event_type;
	@Lob
	@Column(name="aadhar" , columnDefinition ="LONGTEXT")
	private String aadhar;
	@Lob
	@Column(name="license" , columnDefinition ="LONGTEXT")
	private String license;
}