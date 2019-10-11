/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class SurescriptsNotification {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
        this.postedDate = new Date(init.postedDate);
        /** @type {?} */
        const difference = new Date().getTime() - this.postedDate.getTime();
        if (difference <= 3600000) {
            /** @type {?} */
            const minutes = Math.round(((difference % 86400000) % 3600000) / 60000);
            if (minutes < 2) {
                this.readablePostedDate = 'Moments ago';
            }
            else {
                this.readablePostedDate = `${minutes} minutes ago`;
            }
        }
        else if (difference <= 86400000) {
            /** @type {?} */
            const hours = Math.floor((difference % 86400000) / 3600000);
            if (hours < 2) {
                this.readablePostedDate = `${hours} hour ago`;
            }
            else {
                this.readablePostedDate = `${hours} hours ago`;
            }
        }
        else if (difference <= 604800000) {
            /** @type {?} */
            const days = Math.floor(difference / 86400000);
            if (days < 2) {
                this.readablePostedDate = `${days} day ago`;
            }
            else {
                this.readablePostedDate = `${days} days ago`;
            }
        }
    }
}
if (false) {
    /** @type {?} */
    SurescriptsNotification.prototype.title;
    /** @type {?} */
    SurescriptsNotification.prototype.summary;
    /** @type {?} */
    SurescriptsNotification.prototype.id;
    /** @type {?} */
    SurescriptsNotification.prototype.status;
    /** @type {?} */
    SurescriptsNotification.prototype.postedDate;
    /** @type {?} */
    SurescriptsNotification.prototype.readablePostedDate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1cmVzY3JpcHRzL25vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvbm90aWZpY2F0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNLE9BQU8sdUJBQXVCOzs7O2dCQU9iLElBQXVDO1FBQ3RELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUM1QyxNQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEUsSUFBSSxVQUFVLElBQUksT0FBTyxFQUFFOztZQUN2QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDeEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsT0FBTyxjQUFjLENBQUM7YUFDdEQ7U0FDSjthQUFNLElBQUksVUFBVSxJQUFJLFFBQVEsRUFBRTs7WUFDL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUM1RCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsS0FBSyxXQUFXLENBQUM7YUFDakQ7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsS0FBSyxZQUFZLENBQUM7YUFDbEQ7U0FDSjthQUFNLElBQUksVUFBVSxJQUFJLFNBQVMsRUFBRTs7WUFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDO2FBQy9DO2lCQUFNO2dCQUNILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDO2FBQ2hEO1NBQ0o7O0NBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cyB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXN0YXR1cy5lbnVtJztcclxuZXhwb3J0IGNsYXNzIFN1cmVzY3JpcHRzTm90aWZpY2F0aW9uIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBTdXJlc2NyaXB0c05vdGlmaWNhdGlvblN0YXR1cztcclxuICAgIHBvc3RlZERhdGU6IERhdGU7XHJcbiAgICByZWFkYWJsZVBvc3RlZERhdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTdXJlc2NyaXB0c05vdGlmaWNhdGlvbj4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgICAgIHRoaXMucG9zdGVkRGF0ZSA9IG5ldyBEYXRlKGluaXQucG9zdGVkRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5wb3N0ZWREYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAoZGlmZmVyZW5jZSA8PSAzNjAwMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKCgoZGlmZmVyZW5jZSAlIDg2NDAwMDAwKSAlIDM2MDAwMDApIC8gNjAwMDApO1xyXG4gICAgICAgICAgICBpZiAobWludXRlcyA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZGFibGVQb3N0ZWREYXRlID0gJ01vbWVudHMgYWdvJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZGFibGVQb3N0ZWREYXRlID0gYCR7bWludXRlc30gbWludXRlcyBhZ29gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmZXJlbmNlIDw9IDg2NDAwMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAlIDg2NDAwMDAwKSAvIDM2MDAwMDApO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRhYmxlUG9zdGVkRGF0ZSA9IGAke2hvdXJzfSBob3VyIGFnb2A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRhYmxlUG9zdGVkRGF0ZSA9IGAke2hvdXJzfSBob3VycyBhZ29gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmZXJlbmNlIDw9IDYwNDgwMDAwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gODY0MDAwMDApO1xyXG4gICAgICAgICAgICBpZiAoZGF5cyA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZGFibGVQb3N0ZWREYXRlID0gYCR7ZGF5c30gZGF5IGFnb2A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRhYmxlUG9zdGVkRGF0ZSA9IGAke2RheXN9IGRheXMgYWdvYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=