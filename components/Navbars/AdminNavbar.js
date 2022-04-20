import React from "react";
import Link from "next/link";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

function AdminNavbar({ brandText }) {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                  <span className="d-flex align-items-center pi-price">
                   <i class="fa fa-exclamation-circle text-black"></i>
                   PITANO $0.0000 USD
                  </span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                </DropdownItem>
                <Link href="">
                  <DropdownItem>
                    <span>By On Pancakeswap</span>
                    <i className="fa fa-caret-square-o-up" />
                  </DropdownItem>
                </Link>
                <Link href="">
                  <DropdownItem>
                    <span>Chart</span>
                    <i className="fa fa-caret-square-o-up" />
                  </DropdownItem>
                </Link>
                <Link href="">
                  <DropdownItem>
                    <span>ADD TOKEN TO WALLET</span>
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                  <span className="pi-price">
                    Connect Wallet
                  </span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
