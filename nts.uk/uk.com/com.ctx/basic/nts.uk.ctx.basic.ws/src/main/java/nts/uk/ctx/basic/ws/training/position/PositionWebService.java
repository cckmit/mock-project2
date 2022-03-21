package nts.uk.ctx.basic.ws.training.position;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import nts.arc.layer.ws.WebService;
import nts.uk.ctx.basic.app.command.training.position.AddPositionCommand;
import nts.uk.ctx.basic.app.command.training.position.AddPositionCommandHandler;
import nts.uk.ctx.basic.app.command.training.position.RemovePositionCommand;
import nts.uk.ctx.basic.app.command.training.position.RemovePositionCommandHandler;
import nts.uk.ctx.basic.app.command.training.position.UpdatePositionCommand;
import nts.uk.ctx.basic.app.command.training.position.UpdatePositionCommandHandler;


@Path("basic/training/position")
@Produces("application/json")
public class PositionWebService extends WebService{
	

	@Inject
	private AddPositionCommandHandler addPositionCommandHandler;

	@Inject
	private UpdatePositionCommandHandler updatePositionCommandHandler;
	
	@Inject
	private RemovePositionCommandHandler removePositionCommandHandler;
	
	@Inject
	private PositionFinder positionFinder;

	
	/**
	 * add bank
	 * @param command
	 */
	@POST
	@Path("add")
	public void add(AddPositionCommand command) {
		this.addPositionCommandHandler.handle(command);
	}
    
	/**
	 * update bank
	 * @param command
	 */
	@POST
	@Path("update")
	public void update(UpdatePositionCommand command) {
		this.updatePositionCommandHandler.handle(command);
	}
	
	/**
	 * remove bank
	 * @param command
	 */
	@POST
	@Path("remove")
	public void remove(RemovePositionCommand command) {
		this.removePositionCommandHandler.handle(command);
	}
	
	/**
	 * find all bank
	 * @return
	 */
	@POST
	@Path("find/all")
	public List<PositionDto> findAll() {
		return this.positionFinder.findAll();
	}

	
	/**
	 * find check exist bank
	 */
	@POST
	@Path("find/check")
	public void check() {
       this.positionFinder.checkExistsBank();
	}
}
