package com.fi.ecommerce.dto;

import lombok.Data;

import java.util.Set;

import com.fi.ecommerce.entity.Address;
import com.fi.ecommerce.entity.Customer;
import com.fi.ecommerce.entity.Order;
import com.fi.ecommerce.entity.OrderItem;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
