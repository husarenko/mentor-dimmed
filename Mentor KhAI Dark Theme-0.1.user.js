// ==UserScript==
// @name         Mentor KhAI Dark Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Apply dark theme to mentor.khai.edu
// @author       -_-
// @match        https://mentor.khai.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        body {
            background-color: #364355 !important;
            color: #e0e0e0 !important;
        }
        a {
            color: #eeeeee !important;
        }
        span {
            color: #eeeeee !important;
        }
        #main-navbar {
            background-color: #364355 !important;
        }
        #above-header {
            background-color: #202833 !important;
        }
        #adaptable-page-header-wrapper {
            background-color: #202833 !important;
        }
        .fa {
            color: #eeeeee !important;
        }
        .breadcrumb {
            background-color: #202833 !important;
        }
        #above-header {
            border-bottom: none !important;
        }
        a.nav-link:hover {
            background-color: #202833 !important;
        }
        #adaptable-page-header-wrapper #main-navbar li div.nav-link:hover {
            background-color: #202833 !important;
        }
        .dropdown-menu {
            background-color: #364355 !important;
        }
        #main-slider {
            display: none !important;
        }
        #region-main {
            background-color: transparent !important;
        }
        #sitetitle img {
            display: none !important
        }
        #ticker-wrap {
            background-color: #202833 !important;
        }
        .coursebox.panel .panel-body {
            border: none !important;
        }
        .block .header, #page-login-index .card {
            background-color: #202833 !important;
        }
        .btn {
            border: none !important;
        }
        #adaptable-page-header-wrapper #main-navbar {
            border-bottom: 3px solid #202833 !important;
        }
        #page-footer {
            background-color: #202833 !important;
        }
        #page-footer .info {
            border-top: none !important;
        }
        #adaptable-page-header-wrapper .dropdown-menu li a:hover {
            background-color: #202833 !important;
        }
        a, p, span, h1, h2, h3, h4, h5, h6, th, td {
            color: #d5d5d5 !important;
        }
        #page .course-content ul li.section.main {
            background-color: #202833 !important;
            border: none !important;
        }
        .sectionname, .message-app, .view-overview-favourites-toggle,  {
            background-color: #202833 !important;
        }
        .section li.activity.hasinfo {
            border-bottom: none !important;
        }
        .popover-region-container, .popover-region-footer-container {
            background-color: #202833 !important;
            box-shadow: none !important;
        }
        .coursebox.panel.hover:hover .panel-body {

        }
        .cimbox {
            background-color: transparent !important;
            transition: none !important;
        }
        #region-main {
            transition: none !important;
        }
        .panel.hover .coursebtn.submit.btn {
            border: none !important;
        }

        .card, .modal-dialog .modal-content {
            background-color: #202833 !important;
        }

        .path-calendar .maincalendar .calendar_event_course {
            background-color: transparent !important;
            border-color: transparent !important;
        }
        .editor_atto .fa {
            color: #515151 !important;
        }
        .moodle-dialogue-base .moodle-dialogue-wrap, .tabcontentcontainer label.adaptabletab {
            background-color: #202833 !important;
        }
        .block > .content {
            background: #202833 !important;
        }
        .block {
            background-color: transparent !important;
        }
        .page-link {
            background-color: transparent !important;
            border-color: transparent !important;
        }
        .list-group-item {
            background-color: transparent !important;
        }
        .coursemenubtn .fa {
            color: #d5d5d5 !important;
        }
        .btn.coursemenubtn:hover {
            background-color: transparent !important;
        }
        .sectionname, .simplesearchform .btn-submit {
            background-color: transparent !important;
        }
        .submissionstatussubmitted, .submissiongraded  {
            color: #fff !important;
            background-color: #306a30 !important;
        }
        #adaptable-page-header-wrapper #main-navbar .navbar-nav > li > a.nav-link {
            padding: 0 !important;
            margin-left: 5px !important;
            margin-right: 5px !important;
        }

        a:not([class]):focus {
            background-color: #202833 !important;
            border: none !important;
        }

        .message-app, .message-app .message.send, .bg-white, [data-region="message-drawer"] [data-region="body-container"] .btn-link {
           background-color: #202833 !important;
        }
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
