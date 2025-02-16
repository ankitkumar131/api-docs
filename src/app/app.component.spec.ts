import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let breakpointObserver: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(async () => {
    const mockBreakpointState: BreakpointState = {
      matches: false,
      breakpoints: { [Breakpoints.Handset]: false }
    };
    
    breakpointObserver = jasmine.createSpyObj('BreakpointObserver', ['observe']);
    breakpointObserver.observe.and.returnValue(of(mockBreakpointState));

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        AppComponent
      ],
      providers: [
        { provide: BreakpointObserver, useValue: breakpointObserver }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('API Management Platform');
  });

  it('should handle mobile layout', () => {
    const mobileState: BreakpointState = {
      matches: true,
      breakpoints: { [Breakpoints.Handset]: true }
    };
    breakpointObserver.observe.and.returnValue(of(mobileState));
    fixture.detectChanges();
    component.isHandset$.subscribe(isHandset => {
      expect(isHandset).toBe(true);
    });
  });

  it('should handle desktop layout', () => {
    const desktopState: BreakpointState = {
      matches: false,
      breakpoints: { [Breakpoints.Handset]: false }
    };
    breakpointObserver.observe.and.returnValue(of(desktopState));
    fixture.detectChanges();
    component.isHandset$.subscribe(isHandset => {
      expect(isHandset).toBe(false);
    });
  });

  it('should log logout click', () => {
    spyOn(console, 'log');
    component.logout();
    expect(console.log).toHaveBeenCalledWith('Logout clicked');
  });
});
