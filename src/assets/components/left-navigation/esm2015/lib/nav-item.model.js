/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { noop } from 'rxjs';
export class NavItemIcon {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class NavItemLink {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.relative = true;
        this.target = '_self';
        Object.assign(this, init);
    }
}
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
export class NavItem {
    /**
     * @param {?=} init
     */
    constructor(init) {
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
}
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
export class NavHeading {
    /**
     * @param {?=} init
     */
    constructor(init) {
        if (init) {
            init.icon = new NavItemIcon(init.icon);
        }
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    NavHeading.prototype.icon;
    /** @type {?} */
    NavHeading.prototype.title;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0ubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VyZXNjcmlwdHMvbGVmdC1uYXZpZ2F0aW9uLyIsInNvdXJjZXMiOlsibGliL25hdi1pdGVtLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVCLE1BQU0sT0FBTyxXQUFXOzs7O2dCQUdELElBQTJCO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztDQUVqQzs7Ozs7Ozs7O0lBR0csTUFBTyxNQUFNO0lBQ2IsU0FBVSxTQUFTO0lBQ25CLElBQUssSUFBSTtJQUNULFVBQVcsSUFBSTs7O0FBR25CLE1BQU0sT0FBTyxXQUFXOzs7O2dCQU9ELElBQTJCO1FBTjlDLGdCQUFhLElBQUksQ0FBQztRQUVsQixjQUFXLE9BQU8sQ0FBQztRQUtmLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztDQUVqQzs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLE9BQU8sT0FBTzs7OztnQkFRRyxJQUF1QjtRQUgxQyxlQUFrQyxJQUFJLENBQUM7UUFJbkMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQztTQUNKO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0NBRWpDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELE1BQU0sT0FBTyxVQUFVOzs7O2dCQUdBLElBQXVCO1FBQ3RDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7Q0FFakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub29wIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2SXRlbUljb24ge1xyXG4gICAgcHJlZml4OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TmF2SXRlbUljb24+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTmF2SXRlbVR5cGUge1xyXG4gICAgTGluayA9ICdsaW5rJyxcclxuICAgIEhlYWRpbmcgPSAnaGVhZGluZycsXHJcbiAgICBIUiA9ICdocicsXHJcbiAgICBGdW5jdGlvbiA9ICdmbidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkl0ZW1MaW5rIHtcclxuICAgIHJlbGF0aXZlID8gPSB0cnVlO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQgPyA9ICdfc2VsZic7XHJcbiAgICBxdWVyeVBhcmFtcyA/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8TmF2SXRlbUxpbms+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkl0ZW0ge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgaXRlbVR5cGU6IE5hdkl0ZW1UeXBlO1xyXG4gICAgaWNvbjogTmF2SXRlbUljb247XHJcbiAgICBsaW5rOiBOYXZJdGVtTGluaztcclxuICAgIG9uQ2xpY2s6ICAoJGV2ZW50OiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5hdkl0ZW0+KSB7XHJcbiAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgaW5pdC5pY29uID0gbmV3IE5hdkl0ZW1JY29uKGluaXQuaWNvbik7XHJcbiAgICAgICAgICAgIGlmIChpbml0Lml0ZW1UeXBlID09PSBOYXZJdGVtVHlwZS5GdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaW5pdC5saW5rID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaW5pdC5vbkNsaWNrID0gaW5pdC5vbkNsaWNrIHx8IG5vb3A7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdC5pdGVtVHlwZSA9PT0gTmF2SXRlbVR5cGUuTGluaykge1xyXG4gICAgICAgICAgICAgICAgaW5pdC5vbkNsaWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaW5pdC5saW5rID0gbmV3IE5hdkl0ZW1MaW5rKGluaXQubGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdkhlYWRpbmcge1xyXG4gICAgaWNvbjogTmF2SXRlbUljb247XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5hdkl0ZW0+KSB7XHJcbiAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgaW5pdC5pY29uID0gbmV3IE5hdkl0ZW1JY29uKGluaXQuaWNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=