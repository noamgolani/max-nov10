import mongoose from "mongoose";

const agentSchema = mongoose.Schema({
	license_id: String,
	city: String,
	full_name: String,
});

export default mongoose.model("Agent", agentSchema);
