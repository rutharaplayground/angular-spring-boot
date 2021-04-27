package com.fi.ecommerce.service;

import com.fi.ecommerce.dto.Purchase;
import com.fi.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
