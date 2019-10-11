/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { noop } from 'rxjs';
var NavItemIcon = /** @class */ (function () {
    function NavItemIcon(init) {
        Object.assign(this, init);
    }
    return NavItemIcon;
}());
export { NavItemIcon };
if (false) {
    /** @type {?} */
    NavItemIcon.prototype.prefix;
    /** @type {?} */
    NavItemIcon.prototype.name;
}
/** @enum {string} */
var NavItemType = {
    Link: 'link',
    Heading: 'heading',
    HR: 'hr',
    Function: 'fn',
};
export { NavItemType };
var NavItemLink = /** @class */ (function () {
    function NavItemLink(init) {
        this.relative = true;
        this.target = '_self';
        Object.assign(this, init);
    }
    return NavItemLink;
}());
export { NavItemLink };
if (false) {
    /** @type {?} */
    NavItemLink.prototype.relative;
    /** @type {?} */
    NavItemLink.prototype.url;
    /** @type {?} */
    NavItemLink.prototype.target;
    /** @type {?} */
    NavItemLink.prototype.queryParams;
}
var NavItem = /** @class */ (function () {
    function NavItem(init) {
        this.onClick = noop;
        if (init) {
            init.icon = new NavItemIcon(init.icon);
            if (init.itemType === NavItemType.Function) {
                init.link = undefined;
                init.onClick = init.onClick || noop;
            }
            else if (init.itemType === NavItemType.Link) {
                init.onClick = undefined;
                init.link = new NavItemLink(init.link);
            }
        }
        Object.assign(this, init);
    }
    return NavItem;
}());
export { NavItem };
if (false) {
    /** @type {?} */
    NavItem.prototype.text;
    /** @type {?} */
    NavItem.prototype.itemType;
    /** @type {?} */
    NavItem.prototype.icon;
    /** @type {?} */
    NavItem.prototype.link;
    /** @type {?} */
    NavItem.prototype.onClick;
    /** @type {?} */
    NavItem.prototype.selected;
    /** @type {?} */
    NavItem.prototype.id;
}
var NavHeading = /** @class */ (function () {
    function NavHeading(init) {
        if (init) {
            init.icon = new NavItemIcon(init.icon);
        }
        Object.assign(this, init);
    }
    return NavHeading;
}());
export { NavHeading };
if (false) {
    /** @type {?} */
    NavHeading.prototype.icon;
    /** @type {?} */
    NavHeading.prototype.title;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0ubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbGVmdC1uYXZpZ2F0aW9uLyIsInNvdXJjZXMiOlsibGliL25hdi1pdGVtLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVCLElBQUE7eUJBR3VCLElBQTJCO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztzQkFObEM7SUFRQyxDQUFBO0FBTkQsdUJBTUM7Ozs7Ozs7OztJQUdHLE1BQU8sTUFBTTtJQUNiLFNBQVUsU0FBUztJQUNuQixJQUFLLElBQUk7SUFDVCxVQUFXLElBQUk7OztBQUduQixJQUFBO3lCQU91QixJQUEyQjtRQU45QyxnQkFBYSxJQUFJLENBQUM7UUFFbEIsY0FBVyxPQUFPLENBQUM7UUFLZixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7c0JBekJsQztJQTJCQyxDQUFBO0FBVkQsdUJBVUM7Ozs7Ozs7Ozs7O0FBRUQsSUFBQTtxQkFRdUIsSUFBdUI7UUFIMUMsZUFBa0MsSUFBSSxDQUFDO1FBSW5DLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUM7U0FDSjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztrQkFoRGxDO0lBa0RDLENBQUE7QUFyQkQsbUJBcUJDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELElBQUE7d0JBR3VCLElBQXVCO1FBQ3RDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7cUJBM0RsQztJQTZEQyxDQUFBO0FBVEQsc0JBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub29wIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2SXRlbUljb24ge1xyXG4gICAgcHJlZml4OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TmF2SXRlbUljb24+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTmF2SXRlbVR5cGUge1xyXG4gICAgTGluayA9ICdsaW5rJyxcclxuICAgIEhlYWRpbmcgPSAnaGVhZGluZycsXHJcbiAgICBIUiA9ICdocicsXHJcbiAgICBGdW5jdGlvbiA9ICdmbidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkl0ZW1MaW5rIHtcclxuICAgIHJlbGF0aXZlID8gPSB0cnVlO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQgPyA9ICdfc2VsZic7XHJcbiAgICBxdWVyeVBhcmFtcyA/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TmF2SXRlbUxpbms+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkl0ZW0ge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgaXRlbVR5cGU6IE5hdkl0ZW1UeXBlO1xyXG4gICAgaWNvbjogTmF2SXRlbUljb247XHJcbiAgICBsaW5rOiBOYXZJdGVtTGluaztcclxuICAgIG9uQ2xpY2s6ICAoJGV2ZW50OiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5hdkl0ZW0+KSB7XHJcbiAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgaW5pdC5pY29uID0gbmV3IE5hdkl0ZW1JY29uKGluaXQuaWNvbik7XHJcbiAgICAgICAgICAgIGlmIChpbml0Lml0ZW1UeXBlID09PSBOYXZJdGVtVHlwZS5GdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaW5pdC5saW5rID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaW5pdC5vbkNsaWNrID0gaW5pdC5vbkNsaWNrIHx8IG5vb3A7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdC5pdGVtVHlwZSA9PT0gTmF2SXRlbVR5cGUuTGluaykge1xyXG4gICAgICAgICAgICAgICAgaW5pdC5vbkNsaWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaW5pdC5saW5rID0gbmV3IE5hdkl0ZW1MaW5rKGluaXQubGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkhlYWRpbmcge1xyXG4gICAgaWNvbjogTmF2SXRlbUljb247XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5hdkl0ZW0+KSB7XHJcbiAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgaW5pdC5pY29uID0gbmV3IE5hdkl0ZW1JY29uKGluaXQuaWNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=