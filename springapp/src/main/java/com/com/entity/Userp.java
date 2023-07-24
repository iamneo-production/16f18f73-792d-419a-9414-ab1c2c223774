package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Userp {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;

private String fname;
private String lname;
private String email;
private String dob;
private String uname;
private String occ;
private String country;
private String phn;
private String mob;
public Userp(int id, String fname, String lname, String email, String dob, String uname, String occ, String country,
		String phn, String mob) {
	super();
	this.id = id;
	this.fname = fname;
	this.lname = lname;
	this.email = email;
	this.dob = dob;
	this.uname = uname;
	this.occ = occ;
	this.country = country;
	this.phn = phn;
	this.mob = mob;
}
public Userp() {
	super();
	// TODO Auto-generated constructor stub
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getLname() {
	return lname;
}
public void setLname(String lname) {
	this.lname = lname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getDob() {
	return dob;
}
public void setDob(String dob) {
	this.dob = dob;
}
public String getUname() {
	return uname;
}
public void setUname(String uname) {
	this.uname = uname;
}
public String getOcc() {
	return occ;
}
public void setOcc(String occ) {
	this.occ = occ;
}
public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
}
public String getPhn() {
	return phn;
}
public void setPhn(String phn) {
	this.phn = phn;
}
public String getMob() {
	return mob;
}
public void setMob(String mob) {
	this.mob = mob;
}

}
