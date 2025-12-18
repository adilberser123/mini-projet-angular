import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// test suite description
describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test addition of two numbers', () => {
  
    const result = service.addition(7, 7)
    expect(result).toBe(14)
  });

  it('1', () => {
    expect(1).toBe(1);
  });

});
