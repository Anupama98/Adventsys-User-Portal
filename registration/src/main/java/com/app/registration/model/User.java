package com.app.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
@Id	
@GeneratedValue(strategy =GenerationType.IDENTITY)
private int id;
private String emailId;
private String userName;
private String password;
private int mobileNumber;


public User() {

}

public User(int id, String emailId, String userName, String password,int mobileNumber) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.userName = userName;
	this.password = password;
	this.mobileNumber=mobileNumber;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public int getMobileNumber() {
	return mobileNumber;
}
public void setMobileNumber(int mobileNumber) {
	this.mobileNumber=mobileNumber;
}
}
