import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  it('should have not messages to start', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('add function should add a message when iscalled', () => {
    // Arrange
    service = new MessageService();
    // Act
    service.add('message1');
    // Assert
    expect(service.messages.length).toBe(1);
  })

  it('clear function should remove all messages', () => {
    // Arrange
    service = new MessageService();
    service.add('message1');
    // Act
    service.clear();
    // Assert
    expect(service.messages.length).toBe(0);
  })
});
